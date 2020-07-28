import React from "react";
import {Container, Row} from "react-bootstrap";
import {Bingofield} from "./Bingofield";
import {useParams} from "react-router-dom";

export const Matrix = () => {
    const {uuid} = useParams() as any
    const [value, setValue] = React.useState<string[][]>([[]])

    React.useEffect(() => {
        console.log("uuid", uuid)
        fetch(`/api/view/${uuid}`)
            .then(response => response.json())
            .then(data => setValue(data))
    }, [uuid])

    return (
        <Container>
            <div className="text-center mt-3">
                Aussagen werden nacheinander ausgerufen. Wenn du eine Übereinstimmung mit dir selbst erkennst, markierst du das Feld.
                Hast du 3 Treffer quer, hochkant oder diagonal rufst du "Annabingo". <br/>
                Hast du ein Annabingo, gewinnst du das Spiel.
            </div>
            <div className="ml-auto mr-auto">
                {value.map((row, i) => {
                    return <Row key={i}>
                        {row.map((item, j) => {
                            return <Bingofield key={`id-${i}-${j}`} text={item}/>
                        })}
                    </Row>
                })}
            </div>

        </Container>
    )
}