import Image from "next/image"

export default function FirstPost() {
    return (
        <>
            <h1>thenamk20</h1>
            <Image 
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt = "my name"
            />
        </>
    )
}