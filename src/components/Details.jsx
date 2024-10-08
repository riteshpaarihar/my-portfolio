const Details = ({ type, icon, title, link }) => {
 
  const boxShadow = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';

  return (
    <div className="contact-item text-white ">
    <div className="flex my-2 gap-3">
      <div className="icon-box w-10 h-10 flex items-center justify-center " style={{boxShadow}}>{icon}</div>
      <div className="contact-info">
      <div className="flex flex-col">
        <p className="contact-title text-zinc-100">{title}</p>
        <a href={link} className="contact-link">{link}</a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Details;