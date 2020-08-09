import React from 'react';
import { useState } from 'react';
import './App.css';
import getShareImage from '@jlengstorf/get-share-image';

//shot-cropped-1589488575338_ec2lwu
function App() {

  const [src, setSrc] = useState(
    "https://via.placeholder.com/1200x630?text=Set Title and subTitle"
  );

  const [values, setValues] = useState({ title: '', subtitle: '', titleFontSize: 30, taglineFontSize: 24 })


  const handleInputChange = e => {
    const { name, value } = e.target

    setValues({ ...values, [name]: value })
  }
  const onSubmit = () => {

    console.log(values)
    const socialImage = getShareImage({
      title: values.title,
      tagline: values.subtitle,
      cloudName: 'dgehpncom',
      imagePublicID: 'v1593478586/ew_tcpi5o',
      titleFont: 'lato',
      taglineFont: 'futura',
      textColor: '232129',
      textLeftOffset: 150,
      textAreaWidth: 1200,
      titleBottomOffset: 700,
      taglineTopOffset: 290,
      titleFontSize: values.titleFontSize,
      taglineFontSize: values.taglineFontSize,
      imageHeight: 950
    });
    setSrc(socialImage);
  };




  return (
    <div className="wrapper">



      <img src={src} alt="cover" width="100%" />


      <div className="form-signin ">
        <h1>Live poster</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleInputChange}
            required={true}
            className="form-control"
          />


        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Subtitle"
            name="subtitle"
            onChange={handleInputChange}
            className="form-control"

          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Title fontSize"
            name="titleFontSize"
            onChange={handleInputChange}
            className="form-control"
            value={values.titleFontSize}

          />
        </div>
        <div className="form-group">
          <input
            type="number"
            placeholder="Title fontSize"
            name="taglineFontSize"
            onChange={handleInputChange}
            className="form-control"
            value={values.taglineFontSize}

          />
        </div>
        <button className="btn btn-lg btn-primary btn-block" onClick={onSubmit} type="submit"> Generate </button>
      </div>

    </div>
  );
}

export default App;
