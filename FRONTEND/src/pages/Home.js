import { getAuth, onAuthStateChanged } from 'firebase/auth';
import BookGrid from '../components/BookGrid';
import Header from "../components/Header";
import StarGoals from '../components/StarGoals';
import './../book.css'
import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

function Home() {

    const auth = getAuth();
    const user = auth.currentUser;
    const db = getFirestore();
    
    const [goals, setGoals] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setGoals(<StarGoals />);
            } else {
                setGoals(null);
            }
        });

        return () => unsubscribe();
    }, [auth]);

    return (
        <div className="font-fredoka tracking-widest">
            <Header /> 
            {goals}
            <div className="bg-white mt-[20px] mx-[10%] rounded-[20px] p-[20px] px-[60px]">
                <BookGrid />
            </div>
        </div>
    )
}

export default Home;
