import React, { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Star, MessageSquare, Send, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Reply {
  id: string;
  authorName: string;
  text: string;
  createdAt: Timestamp;
}

interface Review {
  id: string;
  authorName: string;
  text: string;
  rating: number;
  createdAt: Timestamp;
  replies?: Reply[];
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyName, setReplyName] = useState('');
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Review[];
      
      setReviews(reviewsData);

      // Setup listeners for replies for each review
      snapshot.docs.forEach(reviewDoc => {
        const repliesQ = query(collection(db, 'reviews', reviewDoc.id, 'replies'), orderBy('createdAt', 'asc'));
        onSnapshot(repliesQ, (replySnapshot) => {
          const repliesData = replySnapshot.docs.map(rdoc => ({
            id: rdoc.id,
            ...rdoc.data()
          })) as Reply[];
          
          setReviews(prev => prev.map(r => 
            r.id === reviewDoc.id ? { ...r, replies: repliesData } : r
          ));
        });
      });
    });

    return () => unsubscribe();
  }, []);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;

    try {
      await addDoc(collection(db, 'reviews'), {
        authorName: newName,
        text: newText,
        rating: newRating,
        createdAt: serverTimestamp()
      });
      setNewName('');
      setNewText('');
      setNewRating(5);
    } catch (error) {
      console.error("Error adding review:", error);
      alert("Chyba při odesílání recenze. Zkontrolujte prosím své připojení.");
    }
  };

  const handleSubmitReply = async (e: React.FormEvent, reviewId: string) => {
    e.preventDefault();
    if (!replyName.trim() || !replyText.trim()) return;

    try {
      await addDoc(collection(db, 'reviews', reviewId, 'replies'), {
        authorName: replyName,
        text: replyText,
        createdAt: serverTimestamp()
      });
      setReplyTo(null);
      setReplyName('');
      setReplyText('');
    } catch (error) {
      console.error("Error adding reply:", error);
      alert("Chyba při odesílání odpovědi.");
    }
  };

  return (
    <div className="container">
      <h1>Zkušenosti našich klientů</h1>
      <p>Vaše zpětná vazba je pro nás klíčová. Podělte se o svou zkušenost s Reality Bez Hranic.</p>

      <div className="grid-2 mt-8 gap-8 items-start">
        {/* Form Column */}
        <section className="section m-0 sticky top-24">
          <h3>Přidat recenzi</h3>
          <form onSubmit={handleSubmitReview} className="mt-4 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Vaše jméno</label>
              <input 
                type="text" 
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Pepa Novák"
                className="w-full p-3 rounded-xl border border-border bg-surface shadow-sm focus:ring-2 focus:ring-brand outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Hodnocení</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewRating(star)}
                    className="transition-transform hover:scale-110 active:scale-95"
                  >
                    <Star 
                      fill={star <= newRating ? "#d28a2d" : "none"} 
                      stroke={star <= newRating ? "#d28a2d" : "#5b6472"} 
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Vaše zkušenost</label>
              <textarea 
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Jak jste byli spokojeni?"
                className="w-full p-3 rounded-xl border border-border bg-surface shadow-sm h-32 focus:ring-2 focus:ring-brand outline-none transition-all resize-none"
                required
              />
            </div>
            <button 
              type="submit" 
              className="bg-brand text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-2 transition-all active:scale-95"
            >
              <Send size={18} /> Odeslat recenzi
            </button>
          </form>
        </section>

        {/* List Column */}
        <div className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {reviews.map((review) => (
              <motion.div 
                key={review.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="section m-0"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand">
                      <User size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold">{review.authorName}</h4>
                      <p className="text-xs text-muted">
                        {review.createdAt?.toDate().toLocaleDateString('cs-CZ')}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#d28a2d" stroke="#d28a2d" />
                    ))}
                  </div>
                </div>
                
                <p className="text-text mt-3">{review.text}</p>

                {/* Replies section */}
                <div className="mt-4 pl-6 border-l-2 border-brand/20 flex flex-col gap-3">
                  {review.replies?.map((reply) => (
                    <div key={reply.id} className="bg-surface-2 p-3 rounded-xl border border-border/50">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-sm">{reply.authorName}</span>
                        <span className="text-[10px] text-muted">
                          {reply.createdAt?.toDate().toLocaleDateString('cs-CZ')}
                        </span>
                      </div>
                      <p className="text-sm">{reply.text}</p>
                    </div>
                  ))}

                  {replyTo === review.id ? (
                    <form onSubmit={(e) => handleSubmitReply(e, review.id)} className="mt-2 flex flex-col gap-2">
                      <input 
                        type="text"
                        value={replyName}
                        onChange={(e) => setReplyName(e.target.value)}
                        placeholder="Vaše jméno"
                        className="text-xs p-2 rounded-lg border border-border bg-surface outline-none"
                        required
                      />
                      <textarea 
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Napište odpověď..."
                        className="text-xs p-2 rounded-lg border border-border bg-surface h-20 resize-none outline-none"
                        required
                      />
                      <div className="flex gap-2">
                        <button type="submit" className="text-xs bg-brand text-white px-3 py-1 rounded-lg">Odpovědět</button>
                        <button type="button" onClick={() => setReplyTo(null)} className="text-xs text-muted hover:underline">Zrušit</button>
                      </div>
                    </form>
                  ) : (
                    <button 
                      onClick={() => setReplyTo(review.id)}
                      className="text-xs text-brand flex items-center gap-1 hover:underline mt-1"
                    >
                      <MessageSquare size={14} /> Odpovědět
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
