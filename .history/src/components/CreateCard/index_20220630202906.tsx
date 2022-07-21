import { appendFile } from 'fs'
import React, { useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap'
import { PrimaryColor, SecondaryColor, EmphasisColor } from '../../misc/colors'
import axiosCon, { linkApi } from '../../services/ApiService'
import { ConvertFileToBase64 } from '../../services/FileService'

export default function CreateCard({ CloseCanvas }: { CloseCanvas: any }) {
    const [title, settitle] = useState<string>("");
    const [photo, setphoto] = useState<string>("");
    const [ErroMessage, setErroMessage] = useState<string>("")
    const api = axiosCon;



    return (
        <>
            <Form.Control
                placeholder="Digite o titulo"
                aria-label="Titulo"
                aria-describedby="Titulo"
                onChange={(e) => {
                    settitle(e.target.value)
                }}
            />
            <br />
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control type="file" accept='image/*' onChange={(file: any) => {
                    let newFile = file.target.files[0];
                    ConvertFileToBase64(newFile, (result: any) => {
                        setphoto(result);
                    });


                }} />
            </Form.Group>
            <br />
            {ErroMessage != "" ?
                <Alert key={"danger"} variant={"danger"}>
                    {ErroMessage}
                </Alert>
                : <></>
            }
            <br />
            <hr />
            <div className='d-flex justify-content-end'>
                <Button style={{
                    backgroundColor: EmphasisColor,
                    border: "none", padding: "8px 20px", boxShadow: "0px 0px 23px 5px rgba(0,0,0,0.22)"
                }}
                    onClick={() => {
                        if (title == "") {
                            setErroMessage("Nome Requerido");
                            return;
                        }
                        if (photo == "") {
                            setErroMessage("Foto Requerida");
                            return;
                        }

                        api.post(linkApi + "api/Car/InsertCar", {
                            "idCar": 0,
                            "idPhoto": 0,
                            "titulo": title,
                            "Base64": photo,
                            "status": true
                        }).then(resp => {
                            CloseCanvas(false);
                            document.location.reload();
                        }).catch(() => {

                        })
                    }}

                >
                    Criar Card
                </Button>
            </div>


        </>
    )
}
