import { NavLink } from "react-router-dom";
import { categories } from "../../constants";
import styles from './Menu.module.css'
export default function Menu() {
    return (
        <div className={`bg-white ${styles.menu} rounded-xl `}>
            <div className="flex flex-col gap-10 p-8 mt-10 ">
                {categories.map((category, index) => (
                <div key={index} className="flex flex-col gap-4">
                    <div className="p-5 bg-secondary rounded-xl">
                        <NavLink to={category.href} className={`flex justify-around items-center`}>
                        <h4 className="h4-custom">{category.name}</h4>
                        <img src={category.image} alt={category.name} width={70} />
                    </NavLink>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
