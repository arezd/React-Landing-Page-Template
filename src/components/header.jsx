import { scramble } from 'scrambled-text'
import { useScrambledText } from 'scrambled-text'
import Scramble from 'react-scramble'


export const Header = (props) => {




function render() {
  return (
    <Scramble
      autoStart
      text="The path towards netzero"
      steps={[
        {
          roll: 3,
          action: '+',
          type: 'all',
        },
        {
          action: '-',
          type: 'forward',
        },
      ]}
    />
  )
}


  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text colorh1'>
                <h1 className='colorh1'>
                    {render()}
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='mailto:contact@tracific.com'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Get in touch
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
