import Image from 'next/image'
import styles from '../../styles/Home.module.css'


function AndrellePage(){
    return(
        <div>Andrelle
            <p>This is where the bio will go.</p>
            <div className={styles.card}>
            <Image src="/andrelle/andrelle2.jpg" height="300px" width="300px"/>
            <Image src="/andrelle/andrelle3.jpg" height="300px" width="300px"/>
            <Image src="/andrelle/andrelle4.jpg" height="300px" width="300px"/>
            <Image src="/andrelle/andrelle5.jpg" height="300px" width="300px"/>
            </div>
        </div>
        
    )
} export default AndrellePage;