import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Pagination, Row, Spinner } from 'react-bootstrap';
import CreateCard from '../../components/CreateCard';
import DeleteModal from '../../components/DeleteModal';
import EditCard from '../../components/EditCard';
import Header from '../../components/header';
import MyCard from '../../components/MyCard';
import MyOffCanvas from '../../components/MyOffCanvas/Index';
import SearchBar from '../../components/searchBar';
import { CardType } from '../../Interfaces/Types';
import { PrimaryColor, BackgroundColor, GBackGround, EmphasisColor } from '../../misc/colors';
import axiosCon, { linkApi } from '../../services/ApiService';

import { BackgroundSearch } from './elements';

export default function Home() {

  const [EditCanvas, setEditCanvas] = useState<boolean>(false)
  const [CreateCardFlag, setCreateCardFlag] = useState(false)

  const [Loading, setLoading] = useState<boolean>(true);
  const [listData, setlistData] = useState<Array<any>>([]);
  const [actualPage, setactualPage] = useState<number>(0);
  const [deleteModal, setdeleteModal] = useState<boolean>(false);
  const [deleteId, setdeleteId] = useState<number>(0);
  const [EditObject, setEditObject] = useState<any>({});
  const [SearchText, setSearchText] = useState<string>("");


  async function LoadData() {
    let api = axiosCon;

    let response = await api.get(linkApi + `api/Car/ListCarsPerPage?page=${(actualPage)}&step=10`) //+ (SearchText != "" ? `&title=${SearchText}` : ""));
    let tmpArr: Array<any> = [];
    tmpArr.concat(response.data.content.response, listData);
    setlistData(response.data.content.response);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

  };
  useEffect(() => {



    LoadData();

    return () => {

    }
  }, [])







  return (
    <>
      <div style={{ backgroundColor: GBackGround, minHeight: "100vh" }}>
        <Header />
        <BackgroundSearch>
          <SearchBar OnClickFun={() => {
            // quando dispara função lista de novo pelo valor do filtro
            LoadData();
          }} Search={SearchText} SetSearch={setSearchText} />



        </BackgroundSearch>
        <Container className='mt-4 '>
          <Row className='mb-4'>
            <Col xs="12" md="12" lg="12">
              <div className='d-flex justify-content-between'>
                <h3 style={{ color: PrimaryColor }}>
                  Resultado Pesquisa
                </h3>

                <Button className='' style={{ backgroundColor: EmphasisColor, border: "none" }} onClick={() => {
                  setCreateCardFlag(true);
                }}>
                  Create card
                </Button>
              </div>
            </Col>
          </Row>
          {/* content for cards */}
          <Row>
            {(Loading == true) ?

              <div className='w-100 d-flex justify-content-center align-center'>
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </Spinner>
              </div>


              :
              <>
                {listData.map(item => {
                  return (
                    <>
                      <Col xs="12" md="4" lg="4" xl="3" >
                        <MyCard
                          OnDelete={(value: number) => {
                            setdeleteId(Number(value));
                            setdeleteModal(true)
                          }}
                          OnEdit={(EditModel: CardType) => { setEditObject(EditModel); setEditCanvas(true) }}
                          car={item} photo={item.photo}></MyCard>
                      </Col>
                    </>
                  )

                })}
                <div className='d-flex justify-content-center m-4'>
                  <Button onClick={() => {
                    LoadData()
                    //executa, concatena no array existente mais 10
                   }}>
                    Carregar mais
                  </Button>

                </div>

              </>

            }
          </Row>

        </Container>
      </div>



      <DeleteModal show={deleteModal} setShow={setdeleteModal} id={deleteId} />

      <MyOffCanvas Titulo='Criar Card' pos='end' show={CreateCardFlag} setShow={setCreateCardFlag}>
        <CreateCard CloseCanvas={setCreateCardFlag} />
      </MyOffCanvas>
      <MyOffCanvas Titulo='Editar Card' pos='start' show={EditCanvas} setShow={setEditCanvas}>
        <>
          <EditCard show={EditCanvas} setShow={setEditCanvas} EditModel={EditObject} />
        </>
        {/* edit card */}
      </MyOffCanvas>


    </>
  )
}
