import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="rgb(0, 0, 33)">
      <MDBContainer className="p-6">
        {/* Social media buttons */}
        <section className="mb-5">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>
          {/* ... (Other social media buttons) */}
        </section>

        {/* Newsletter form */}
        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className="mb-4">
                  Click Here
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        {/* Left-aligned content */}
        <section className="d-inline-block" style={{ textAlign: 'left', width: '50%' }}>
          <p className="mb-1">
            <i>
              Useful Links <br />
              Discussion Forum <br />
              Terms <br />
              Bhuvan User Handbook and Others <br />
              Search
            </i>
          </p>
        </section>

        {/* Right-aligned content */}
        <section className="d-inline-block float-end text-end" style={{ textAlign: 'right', width: '50%' }}>
          <p className="mb-1">
            <h3>Web Information Manager</h3>
            Bhuvan Geo Portal & Web Services Group (BGWSG) <br />
            National Remote Sensing Centre Indian Space Research <br />
            Organisation Government of India Hyderabad - 500 037, <br />
            INDIA. Email bhuvan[at]nrsc[dot]gov[dot]in <br />
            Phone : +91-40-2388 4588/89
          </p>
        </section>

        {/* Links */}
        <section className="mt-3">
          <MDBRow>{/* ... (Your link sections) */}</MDBRow>
        </section>
      </MDBContainer>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2023 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          BHUVAN
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
