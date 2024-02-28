import Link from "next/link"


const Blog: React.FC<any> = () => {

    return (
        <div className="h-screen flex-col w-screen flex items-center justify-center">
            <h1>Em Breve</h1>
            <Link href="/">Voltar para devniltonrocha.com.br</Link>
        </div>
    )
}

export default Blog