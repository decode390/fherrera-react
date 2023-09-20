import PropTypes from 'prop-types';

const newMessage = {
  message: 'Prueba1',
  title: 'Title'
}

const getName = ()=>'Nombre';

export const FirstApp = ({title, subTitle})=>{
  // if (!title) {
  //   throw new Error('Title no exits');
  // }

  return (
    <>
      {/*  <h1>{getName()}</h1>  */}
      <h1 data-testid="test-title">{title}</h1>
      {/*  <code>{ JSON.stringify(newMessage) }</code>  */}
      <p>{subTitle }</p>
      <p>{subTitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Miguel',
  subTitle: '123',
  // title: 'No title',
}
