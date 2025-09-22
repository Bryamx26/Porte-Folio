function IframeContainer({ src }) {
    return (
        <div className="picture">
            <div className="picture-image " style={{ width: "35%", height: "80dvh" , backgroundPosition: "center" , zoom : "1"   }}>

                <iframe
                    src={src}
                    width="100%"
                    height="100%"
                    style={{ border: 'none', borderRadius: '25px'  }}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default IframeContainer;
