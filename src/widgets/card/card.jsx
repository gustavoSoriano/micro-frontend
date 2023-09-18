import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Card, { CardContent, CardHeader, CardFooter } from '@andes/card';
import Button from "../../components/button/button.jsx"
import Modal from "../../components/modal/modal.jsx"
import './styles.scss';

const CardDemo = () => {
    const [open, setOpen] = useState(false);


    return (
        <div className="card-story-container">
            <Modal open={open} setOpen={setOpen} />
        
          <Card borderColor="accent" shadow="elevated">
            <CardContent>
              This is a card with an <strong>accent</strong> border color.
            </CardContent>
          </Card>
          <Card borderColor="green">
            <CardContent>
              This is a card with a <strong>green</strong> border color.
            </CardContent>
          </Card>
          <Card borderColor="orange">
            <CardContent>
              This is a card with an <strong>orange</strong> border color.
            </CardContent>
          </Card>
          <Card borderColor="red" shadow="elevated">
            <CardContent>
              This is a card with a <strong>red</strong> border color.
            </CardContent>
          </Card>
          <h2>Disclaimer</h2>
          <p>Notice that the border only applies to the content of the card:</p>
          <br />
          <Card borderColor="accent">
            <CardHeader><h3>Card header</h3></CardHeader>
            <CardContent>Card Content</CardContent>
            <CardFooter>
                <Button onClick={() => setOpen(true)}>Teste</Button>
            </CardFooter>
          </Card>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <CardDemo />
  </React.StrictMode>,
  document.getElementById('card_widget')
);
