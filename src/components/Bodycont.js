import '../design/bodycont.css'
import {useNavigate} from 'react-router-dom';
function Bodycont() {
  const navigate = useNavigate();
  function startedHandler(){
    navigate('/signup')
  }

  return (
    <div className="body-cont">
      <div className="first">Unlimited movies, TV shows and more</div>
      <div className="second">Watch anywhere. Cancel anytime.</div>
      <div className="third">Ready to watch? Enter your email to create or restart your membership.</div>
      <div className="fourth">
          <div>
    </div>

      </div>
      <div className="fifth">
        <button class="cssbuttons-io-button" onClick={startedHandler}>
          Get started
          <div class="icon">
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Bodycont;