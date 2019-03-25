import React from 'react';
import { connect } from 'react-redux';
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';

import {listActions} from "../_actions";
import ImagesContainer from "../_components/ImagesContainer";

class ListPage extends React.Component {
    state = {
        images: [],
        showModal: false,
        activeVideo: null
    };

    static getDerivedStateFromProps(props, state) {
        if ( JSON.stringify(props.images) !==  JSON.stringify(state.images)) {
            return {images: props.images}
        }

        return null;
    }

    componentDidMount() {
        const {getImages} = this.props;

        getImages();
    }

    render() {
        const { images, showModal, activeVideo } = this.state;

        return (
            <Container>
                <ImagesContainer
                    images={images}
                    handleOpenModal={this.handleOpenModal}
                />

                {
                    activeVideo &&
                        <Modal show={showModal} onHide={this.handleCloseModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    Video
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>{activeVideo.title}</p>
                                <Row>
                                    <Col md={12}>
                                        <video
                                            height="300"
                                            width="100%"
                                            controls="controls"
                                            muted={false}
                                            poster={activeVideo.img_url}>
                                            <source src={activeVideo.vid_url}
                                                    type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
                                            <a href={activeVideo.vid_url}>
                                                Download
                                            </a>
                                        </video>
                                    </Col>
                                </Row>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary"
                                        onClick={this.handleCloseModal}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                }
            </Container>
        );
    }

    handleOpenModal = (video) => {
        this.setState({ showModal: true, activeVideo: video });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false, activeVideo: null });
    }

}

const mapStateToProps = state => ({
    images: state.list.images
});

const mapDispatchToProps = dispatch => ({
    getImages: () => dispatch(listActions.getImages())
});

const connectedListPage = connect(mapStateToProps, mapDispatchToProps)(ListPage);
export { connectedListPage as ListPage };