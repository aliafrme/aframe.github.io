import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';

function News() {
  return (
    <div className="News">
<Navbar className="Navbar" style={{ backgroundColor: '#4B4B4B' , }}>
        <Container>
         
          <Nav className="me-auto">
            <Link to="/"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Home</Link>
            <Link to="/news" style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>News</Link>
            <Link to="/Login"  style={{ color:'#ddd', paddingLeft: 13, textDecoration: 'none' }}>Log in</Link>
            
          </Nav>
        </Container>
  </Navbar>
   <header className="App-header-News">
      <h1>News</h1>
      </header>

{[
    
        'success',
        
      ].map((variant) => (
   <Alert key={variant} variant={variant}>Title :Meteor & Milky Way over the Mediterranean, Date : 2022-08-23<br />Careful planning made this a nightscape to remember. First, the night itself was chosen to occur during the beginning of this year's Perseid Meteor Shower. Next, the time of night was chosen to be before the bright Moon would rise and dominate the night sky's brightness. The picturesque foreground was selected to be a rocky beach of the Mediterranean Sea in Le Dramont, France, with, at the time, île d’Or island situated near the ominously descending central band of our Milky Way Galaxy. Once everything was set and with the weather cooperating, all of the frames for this seemingly surreal nightscape were acquired within 15 minutes. What you can't see is that, on this night, the astrophotographer brought along his father who, although unskilled in modern sky-capture techniques, once made it a point to teach his child about the sky. Perseid Meteor Shower 2022 Gallery: Notable Submissions to APOD</Alert>
       ))}




      {[
    
        'success',
        
      ].map((variant) => (
   <Alert key={variant} variant={variant}>Title : Saturn: 1993 - 2022  , Date : 2022-08-19 <br />Saturn is the most distant planet of the Solar System easily visible to the unaided eye. With this extraordinary, long-term astro-imaging project begun in 1993, you can follow the ringed gas giant for one Saturn year as it wanders once around the ecliptic plane, finishing a single orbit around the Sun by 2022. Constructed from individual images made over 29 Earth years, the split panorama is centered along the ecliptic and crossed by the plane of our Milky Way galaxy. Saturn's position in 1993 is at the right side, upper panel in the constellation Capricornus and progresses toward the left. It returns to the spot in Capricornus at left in the lower panel in 2022. The consistent imaging shows Saturn appears slightly brighter during the years 2000-2005 and 2015-2019, periods when its beautiful rings were tilted more face-on to planet Earth.</Alert>
       ))}






     </div>
  );
}
export default News;