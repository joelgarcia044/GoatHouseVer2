import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function ErykPage(){
    return(
        <div>Eryk Leone
            <p>This is where the bio will go.</p>
            <div className={styles.card}>
            <Image src="/eryk/eryk2.jpg" height="300px" width="300px"/>
            <Image src="/eryk/eryk3.jpg" height="300px" width="300px"/>
            <Image src="/eryk/eryk4.jpg" height="300px" width="300px"/>
            </div>
        </div>
        
    )
} export default ErykPage;