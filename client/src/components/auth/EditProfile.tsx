import React, {  useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/auth';
import lclzStor from "../../local";
import IUser from "../../interfaces/IUser";
import {Row, Col, Form, FormGroup, ButtonGroup, Button, FormControl, Card} from 'react-bootstrap';
import { DropzoneComponent } from 'react-dropzone-component';
import ReactTags from 'react-tag-autocomplete';
import ITag from "../../interfaces/ITag";

interface IProps {
    user: IUser;
    updateUser:(payload: IUser) => void,
    isAuthenticated: boolean
}

const EditProfile = (props: IProps) => {
    const {user, isAuthenticated, updateUser } = props;

    const [formData, setFormData] = useState<IUser>({
        firstName: user && user.firstName,
        lastName: user && user.lastName,
        email: user && user.email || ''  ,
        companyName: user && user.companyName,
        companyDescription: user && user.companyDescription,
        address: user && user.address,
        tags: [
            { id: 1, name: "Washington" },
            { id: 2, name: "Sydney" },
            { id: 3, name: "Beijing" }
        ],
        fopCode: user && user.fopCode,
        logo: user && user.logo,
        _id: ''
    });

    useEffect(() => {
        user && setFormData({...user, tags: [
            { id: 1, name: "#Washington" },
            { id: 2, name: "#Sydney" },
            { id: 3, name: "#Beijing" },
                { id: 4, name: "#LosAngeles" },
                { id: 5, name: "#Sydney" },
                { id: 6, name: "Washington" }
        ]});
    }, [user]);
    const { firstName,lastName, email, companyName, companyDescription, tags, fopCode, logo, address } = formData;

    const handleDelete = (i) => {
        console.log('handleDelete', i);
        tags.splice(i, 1);       
    };

    const handleAddition = (tag: ITag) => { tags.push(tag) };
       
    const onChange = (name: string, value: string) => setFormData({ ...formData, [name]: value });
    const onChange_ = (e) => onChange(e.currentTarget.name, e.currentTarget.value);

    const onSubmit = async e => {
      e.preventDefault();
      const userData = {firstName, lastName, companyName, companyDescription, tags, fopCode, logo, address, email, _id: user._id};
      updateUser(userData);
  };
    const config = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/'
    };
    const djsConfig = {
        addRemoveLinks: true,
        acceptedFiles: "image/jpeg,image/png,image/gif",
        maxFiles: 1
        /*autoProcessQueue: false,
        uploadprogress: 100*/
    };
    let dropzone;

    const maxfilesexceeded = (file: string) =>{
        const toRemove = dropzone.files[0];
        dropzone.removeFile(toRemove)
    }
    const uploadFile = (file) => {

        const reader = new FileReader();
        reader.onload = (event) => {
            event.target && setFormData({...formData, logo: event.target.result})
        };
        reader.readAsDataURL(file);
    }


    const eventHandlers = {
        init: (dpz) => {
            dropzone = dpz;
            console.log(dropzone)
         //   dropzone.files[0].dataUrl = logo
        },
        maxfilesexceeded,
        addedfile: (file) => uploadFile(file)
    };
    const tagsSuggestions = [
        { id: 1, name: "Amsterdam" },
        { id: 2, name: "Beijing" },
        { id: 3, name: "Cairo" },
        { id: 4, name: "Los Angeles" },
        { id: 5, name: "Sydney" },
        { id: 6, name: "Washington" }
    ]
  return (
    <Card className="col-md-12 col-lg-9">
        <Card.Header>
          <h3>{lclzStor.editProfileTitle}</h3>
        </Card.Header>
        <Card.Body>
          <Form>
              <Row>
                  <Form.Group className="col-md-6 col-sm-12">
                      <Form.Control
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChange_}
                          placeholder={lclzStor.email}
                          required={true}
                      />
                  </Form.Group>
                  <FormGroup className="col-md-6 col-sm-12">
                      <FormControl type="text" name="firstName" value={firstName} onChange={onChange_} placeholder={lclzStor.firstName} />
                  </FormGroup>
                  <Form.Group className="col-md-6 col-sm-12">
                      <FormControl type="text" name="lastName" value={lastName} onChange={onChange_} placeholder={lclzStor.lastName} />
                  </Form.Group>
                  <FormGroup className="col-md-6 col-sm-12">
                      <FormControl type="text" name="companyName" value={companyName} onChange={onChange_} placeholder={lclzStor.companyName} />
                  </FormGroup>
                  <FormGroup className="col-md-12">
                      <FormControl type="text" name="companyDescription" as="textarea" value={companyDescription} onChange={onChange_} placeholder={lclzStor.companyDescription} />
                  </FormGroup>
                  <FormGroup className="col-12 m-t-15">
                      <Form.Label>{lclzStor.logoProfileTitle}</Form.Label>
                      <DropzoneComponent config={config} eventHandlers={eventHandlers} djsConfig={djsConfig} />
                  </FormGroup>
                  <FormGroup className="col-12 m-t-15">
                      <Form.Label>{lclzStor.addTagsTitleOnProfile}</Form.Label>
                      <p className="text-muted">{lclzStor.addTagsDescriptionOnProfile}</p>
                      <ReactTags
                          classNames={{root: 'react-tags bootstrap-tagsinput', selectedTag: 'react-tags__selected-tag alert-success'}}
                          allowNew={true}
                          addOnBlur={true}
                          tags={tags}
                          handleDelete={handleDelete}
                          handleAddition={handleAddition}
                          suggestions={tagsSuggestions}
                      />
                  </FormGroup>
                  <Form.Group className="col-12">
                      <div className="switch d-flex m-r-10">
                          <Form.Control type="checkbox" id="subscribe-to-all-tenders" defaultChecked={true} />
                          <Form.Label htmlFor="subscribe-to-all-tenders" className="cr w-100 p-l-40">{lclzStor.subscribeMeToAllTenders}</Form.Label>
                      </div>
                  </Form.Group>
                  <FormGroup className="col-md-6 col-sm-12">
                      <FormControl type="text" name="fopCode" value={fopCode} onChange={onChange_} placeholder={lclzStor.fopCode}  />
                  </FormGroup>
                  <FormGroup className="col-md-6 col-sm-12">
                      <FormControl type="text" name="address" value={address} onChange={onChange_} placeholder={lclzStor.address}  />
                  </FormGroup>
              </Row>
              <Button variant="primary" type='submit' onClick={onSubmit}>{lclzStor.save}</Button>
          </Form>
        </Card.Body>
    </Card>
  );
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
});

export default connect( mapStateToProps, { updateUser } )(EditProfile);
