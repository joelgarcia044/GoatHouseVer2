import Image from 'next/image'
import styles from '../../styles/Home.module.css'

function JoshPage(){
    return(
        <div>josh the artist
            <p>This is where the bio will go.</p>
            <div className={styles.card}>
            <Image src="/josh/josh2.jpg" height="300px" width="300px"/>
            <Image src="/josh/josh3.jpg" height="300px" width="300px"/>
            <Image src="/josh/josh4.jpg" height="300px" width="300px"/>
            </div>
        </div>
        
    )
} export default JoshPage;