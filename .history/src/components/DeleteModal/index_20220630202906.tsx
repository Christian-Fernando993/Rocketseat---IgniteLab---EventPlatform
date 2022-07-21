import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { BackgroundColor, ErrorColor } from '../../misc/colors';
import { GoTrashcan } from "react-icons/go";
import axiosCon, { linkApi } from '../../services/ApiService';
export default function DeleteModal({ show, setShow, id = 0 }: { show: boolean, setShow: any, id?: number }) {
  let api = axiosCon;
  return (
    <>
      <Modal style={{ minHeight: "250px" }} show={show} centered onHide={() => setShow(false)}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>

          <div style={{
            margin: "auto", borderRadius: "50%", width: "150px", height: "150px",
            border: "1px solid #ccc", backgroundColor: "#fdf2f2", display: "flex",
            justifyContent: "center", alignItems: "center"
          }}>
            <GoTrashcan size={70} color={ErrorColor} />
          </div>
          <div className='text-center p-1'>
            <h3 className='text-danger m-1'>Excluir</h3>
            <h6 className='text-secondary m-2'>Tem certaza que deseja excluir?</h6>
          </div>




        </Modal.Body>
        <Modal.Footer>
          <div className='w-100 d-flex justify-content-around'>
            <Button style={{
              padding: "5px 40px",
              border: "1px solid #db2525", backgroundColor: "#db2525"
            }}
              onClick={() => {
                api.post(linkApi + "api/Car/RemoveCar?id=" + id).then(resp => {
                  setShow(false);
                  document.location.reload();
                }).catch((ex) => {
                  console.warn(ex)
                })

              }}
            >
              Excluir
            </Button>
            <Button style={{ padding: "5px 30px", border: "1px solid #db2525", color: "#db2525", backgroundColor: "#fff" }} >
              Cancelar
            </Button>
          </div>


        </Modal.Footer>
      </Modal>
    </>
  )
}
