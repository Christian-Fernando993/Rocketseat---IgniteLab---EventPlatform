import React, { useEffect, useState } from 'react'
import { Alert, Button, Form } from 'react-bootstrap';
import { EmphasisColor } from '../../misc/colors';
import axiosCon, { linkApi } from '../../services/ApiService';
import { ConvertFileToBase64 } from '../../services/FileService';

export default function EditCard({ EditModel, show, setShow }: { show: boolean, EditModel: any, setShow: any }) {
    const [title, settitle] = useState<string>("")
    const [photo, setphoto] = useState<string>("")
    const [ErroMessage, setErroMessage] = useState<string>("")
    let api = axiosCon;

    useEffect(() => {
        if (show == true) {//ao abrir carrega dados            
            settitle(EditModel.car.name);
            setphoto(EditModel.photo.base64);

        }

        return () => {

        }
    }, [show]);

    return (
        <div>
            <Form.Control
                placeholder="Digite o titulo"
                aria-label="Titulo"
                aria-describedby="Titulo"
                value={title}
                onChange={(e) => {
                    settitle(e.target.value)
                }}
            />
            <br />
            <img src={photo} style={{ width: "100%", height: "auto" }} />

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

                        api.post(linkApi + "api/Car/EditCar", {

                            "idCar": EditModel.car.id,
                            "idPhoto": EditModel.photo.id,
                            "titulo": title,
                            "base64": photo,
                            "status": true

                        }).then(resp => {
                            setShow(false);
                            document.location.reload();
                        }).catch((ex) => {
                            console.warn(ex)
                        })
                    }}

                >
                    Finalizar
                </Button>
            </div>
        </div>
    )
}

