import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import PropTypes from "prop-types";

class ImagesContainer extends React.Component {
    state = {
        images: []
    };

    static getDerivedStateFromProps(props, state) {
        if ( JSON.stringify(props.images) !==  JSON.stringify(state.images)) {
            return {images: props.images}
        }

        return null;
    }

    render() {
        const { images } = this.state;

        return (
                <Row className="align-items-center justify-content-md-center">
                    {
                        images && images.map(
                            list=>list.videos.map(
                                video=>
                                    video.img_url &&
                                    <Col md={3} className="m-3">
                                        <Card
                                              key={video.id}
                                              onClick={()=>this.handleOpenModal(video)}
                                        >
                                            <Card.Img variant="top"
                                                      src={video.img_url}
                                                       />
                                            <Card.Body>
                                                <Card.Text>
                                                    {video.title}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                            )
                        )
                    }
                </Row>
        );
    }

    handleOpenModal = (video) => {
        const {handleOpenModal} = this.props

        return handleOpenModal(video)
    }
}

ImagesContainer.proptypes = {
    images: PropTypes.object.isRequired,
    handleOpenModal: PropTypes.func,
};

export default ImagesContainer