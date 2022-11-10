import Link from 'next/link';

export default function Footer() {
    return (
        <div className={`pt-2 bg-black h-20`}>
            <Link href='#'>
                <a className='text-decoration-none text-light'><p className='text-center font-semibold'>Back up</p></a>
            </Link>
            <p className={`text-center mb-0`}>© 2022 All Rights Reserved.</p>
        </div>
    )
}