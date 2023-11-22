import FadeInAndOut from './components/fadeinout'
import GridWithBounceEffect from './components/gridBounce'
import styles from '../styles/Home.module.css'
import BookForm from './components/bookForm'

export default function BookPage() {
    return (
        <div className="h-[1560px] mt-[30px]">
            <FadeInAndOut>
                <h1 className="text-[100px] pl-[100px] font-zeyada font-bold">Hire me for your specific needs</h1>
                <p className="text-[24px] text-gray-500 pl-[100px]">Every audience deserves a different type of approach and entertainment. I am here to curate to your every need. Let's get in touch!</p>
            </FadeInAndOut>
            <div>
                <FadeInAndOut>
                    <GridWithBounceEffect />
                </FadeInAndOut>
            </div>

            <div className="flex relative">
            <div className="w-1/2 p-4">
                <div className="h-[542px]">
                <FadeInAndOut>
                <h1 className="text-[100px] font-bold pl-[180px] font-zeyada text-right pt-[90px]">Don't miss my next show</h1>
                    <h2 className="text-right text-[32px]">Book your next tickets here</h2>
                </FadeInAndOut>
                </div>
            </div>
            <div className={`${styles.headerflip} w-1/2 p-4 shadow-md`}>
                <div className="h-[540px] pt-[90px]">
                    <BookForm />
                </div>
            </div>
            </div>
        </div>
    )
}