type QuestionsProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }
}

export function Question({
    content, 
    author,
}: QuestionsProps) {
    return (
        <div className="question">
            <p>{content}</p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                </div>
                <div></div>
            </footer>
        </div>
    )
}