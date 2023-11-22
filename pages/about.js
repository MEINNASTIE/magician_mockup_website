import FadeInAndOut from './components/fadeinout'

export default function About() {
    return (
        <>
        <div className="flex relative h-[640px]">
            <div className="w-1/2">
                <FadeInAndOut>
                <h1 className="text-[120px] font-bold pl-[180px] font-zeyada text-right">About me</h1>
                </FadeInAndOut>
            </div>
            <div className="w-1/2">
                <img src="/lyney.png" alt="magician profile" className="absolute right-0 w-[1390px] "/>
            </div>
        </div>

        <div className="p-[100px] text-[20px]">
            <FadeInAndOut>
            <p className="text-gray-500 p-[40px]">"This is no mere illusion, tis I, Lyney! The greatest magician in all Teyvat! How are we feeling today? Excited? Surprised? Oh, you're curious how I appeared in front of you like this? Well... Hmm, your eyes are like topaz, precious, pure, and lovely. I like them! I've decided — I'm going to put on a show just for you. Watch carefully now. Blink, and you might miss it!</p>
            <p>The people of Fontaine love their tales of mystery. The intricate case setups and unexpected twists and turns are captivating for all."
            Magic recreates this experience under the converging spotlights. For the price of a ticket and some of your free time, you can embark on a wondrous journey amidst thunderous applause and astounded cries.
            If you were to ask around as to which of Fontaine's "guides" is best at setting up such fantastical tours, most fans will tell you that it is Lyney.
            Suave, romantic, and talented, he performs miracle after miracle with a casual air.
            In this industry, one needs only a stable of staple tricks to ensure a renowned reputation and comfortable life.
            However, Lyney's shows always feature some new trick. Some say that he was born into poverty, and the resultant burning hunger for fame and fortune drives his boundless desire to create.
            In truth, he simply pursues novelty in his capacity as a performer — indeed, he feels that if he cannot put his whole heart into the show, his deep desire to perform cannot be fully satiated.
            This is why, despite the applause rising to a fever pitch and beyond, he will rarely satisfy the crowd's calls for a reprise of his most well-known tricks. Some devoted fans consider this to be a bit of a shame...
            ...And for them, such regret will only continue to increase each time they purchase a ticket and go in to watch his show.</p>
            </FadeInAndOut>
        </div>
        </>
    )
}