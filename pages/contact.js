import styles from '../styles/Home.module.css'
import ContactForm from './components/contact'
import FadeInAndOut from './components/fadeinout'

export default function Contact() {
    return (
       <div className="flex relative">
            <div className={`${styles.contactbackground} w-1/2 p-4 shadow-md`}>
                <div className="h-[920px] pt-[200px]">
                    <ContactForm />
                </div>
            </div>
            <div className="w-1/2 p-4">
                <div className="h-[920px]">
                    <FadeInAndOut>
                    <h1 className="text-[120px] font-bold pl-[180px] font-zeyada text-right">Contact me</h1>
                    <h2 className="text-right text-[20px]">Do you have any questions? Are you interested in giving out a card full of praises or just want to leave an intriguing message?</h2>
                    </FadeInAndOut>
                </div>
            </div>

            <img src="/arrow-29.svg" alt="arrow" className="absolute w-[350px] transform -rotate-90 top-[40%] right-[30%]"/>
       </div>
    )
}