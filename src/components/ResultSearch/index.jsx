
import './index.css'

export const ResultSearch = ({result}) => {

    return (

        <div className="result-search">
            <div className="description-description">
                <div className="result-description">
                    <h2>CIDADE</h2>
                    <p>{result.city ? result.city : "não encontrado"}</p>
                </div>

                <div className="result-description-botton">
                    <h2>LOGRADOURO</h2>
                    <p>{result.address ? result.address : "não encontrado"}</p>
                </div>
            </div>
            <div className="description-right">
                <div className="result-description">
                    <h2>UF</h2>
                    <p>{result.state ? result.state : "não encontrado"}</p>
                </div>

                <div className="result-description-botton">
                    <h2>BAIRRO</h2>
                    <p>{result.district ? result.district : "não encontrado"}</p>
                </div>
            </div>
        </div>
    )
}