// import {  iconWhatsapp } from '../../data/img/img-data';
import './btnWhatsapp.scss'
import { motion } from "framer-motion"

export const BtnWhatsapp = () => {
    return (

        <motion.div
            animate={{
                transform: "translateY(6px)",
                transition: {
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }
            }} className="heart movil">
            <a href="https://api.whatsapp.com/send?phone=523335484927&text=Hola!%20Quiero%20inscribirme!" className="" target="_blank"
                rel=" whatsapp">
                {/* <img src={iconWhatsapp.url} alt={iconWhatsapp.alt} /> */}
            </a>
        </motion.div>

    );
}