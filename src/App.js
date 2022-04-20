import Button from './components/Button';

import './App.css';

function App() {
  const handleClick = () => {
    console.log('Clicked!');
  };

  return (
    <div className="App mt-5">
      <Button accent="primary" outline disabled />
      <br />
      <br />

      <Button size="lg" accent="danger" onClick={handleClick}>
        Login
      </Button>
      <br />
      <br />

      <Button
        className="d-flex justify-content-center align-items-center mx-auto"
        accent="primary"
        size="sm"
      >
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAi0lEQVRIie3UMQoCMRCF4Q9PYWOjnaVg5wXEe3uHbdxCKxvxBGOjTdiw6GYKYR+8JkzmJ5PkMevfdcEhExB4Yp8JCDywywQE7thmAgI3bGrFp3dBuelb91gNAa4Nmn/cYTl23Kk+w6I2rwaKciF9RMdGkOol/6KhZ7pu1bwEpH601KhIDbv0uJ41XS/qT4BOE+jRHgAAAABJRU5ErkJggg=="
          alt="icon"
          className="mx-2"
        />
        Dark
      </Button>
    </div>
  );
}

export default App;
