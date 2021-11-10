import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function NyckPage(){
    return(
        <div>nyck 
            <p>This is where the bio will go.</p>
            <div className={styles.card}>
            <Image src="/nyck/nyck2.jpg" height="300px" width="300px"/>
            <Image src="/nyck/nyck3.jpg" height="300px" width="300px"/>
            <Image src="/nyck/nyck4.jpg" height="300px" width="300px"/>
            <Image src="/nyck/nyck5.jpg" height="300px" width="300px"/>
            </div>
        </div>
        
    )
} export default NyckPage;