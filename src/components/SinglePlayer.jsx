import { useParams } from "react-router-dom"

export default function SinglePlayer() {
    const { puppyId } = useParams()
    console.log("SinglePlayer has ", puppyId)
    return (
        <div>
            <p>Single Player</p>
        </div>
    )
}