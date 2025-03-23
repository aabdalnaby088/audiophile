import { IoIosArrowForward } from "react-icons/io";
import styles from './CategoryCard.module.css'
import { Category } from "../../constants";
import { useNavigate } from "react-router-dom";



interface categoryCardProps{
    item: Category
}
export default function CategoryCard({item} : categoryCardProps) {
    const navigate = useNavigate();
    function handleNavigate (){
        navigate(item.href)
    }
    return (
        <div className="bg-secondary relative rounded-xl font-primary py-8 flex flex-col items-center">
            <div className={styles.imageContainer}>
                <img src={item.image} className="w-[160px] h-[160px]" alt="category"/>
            </div>
            <div className="flex flex-col w-[350px] h-[190px] gap-4 items-center justify-center">
                <p className=" font-bold">
                    {item.name}
                </p>
                <button className="btn-3 gap-3 text-gray-600" onClick={handleNavigate}  type="button">
                        SHOP <span className="text-primary"><IoIosArrowForward /></span>
                </button>
        </div>
        </div>
    )
}
