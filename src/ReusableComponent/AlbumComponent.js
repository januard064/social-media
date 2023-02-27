import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AppContext } from "../App";

import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';

const AlbumComponent = (props) => {

    const { photos } = useContext(AppContext)

    const navigate = useNavigate()

    const handleClick = (id) => {
        // navigate(`/userpage/${id}`,)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [photoDetailId, setPhotoDetailId] = useState({})

    const handleOpenModal = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    const handleOpenDetailPhotos = (id) => {
        // setPhotoDetailId(id)
        let photo = photos.filter((photo) => photo.id == id)[0]
        setPhotoDetailId(photo)
        console.log(photo)
        handleOpenModal()
    }

    const { albumId, title } = props
    return (
        <>
            <div style={{ width: '100%', marginBottom: 20, cursor: 'pointer', padding: 8, backgroundColor: "#F5F5F5" }}>
                <div> {title}</div>
                <div style={{ width: '100%', overflowX: 'scroll', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                    {photos.filter((photo) => photo.albumId == albumId).map((photoAlbum) => (
                        <div onClick={() => handleOpenDetailPhotos(photoAlbum.id)} style={{ marginRight: 8 }}>
                            <img src={photoAlbum.thumbnailUrl} alt="thumbnail" />
                        </div>
                    ))}
                </div>
            </div>

            <Modal show={isModalOpen} onHide={handleCloseModal}>
               
                {/* <Modal.Body closeButton> */}
                    <Card style={{ width: '100%' }}>
                        <Card.Img variant="top" src={photoDetailId.url} />
                        <Card.Body>
                            <Card.Text>
                                {photoDetailId.title}
                            </Card.Text>
                        </Card.Body>
                    </Card>

                {/* </Modal.Body> */}

            </Modal>
        </>
    )
}

export default AlbumComponent