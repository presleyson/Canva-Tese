import './style.css'
import { Dialog, DialogContent } from '@radix-ui/react-dialog'

export default function PopUp({ open, message, close, confirm, cancel, confirmFnct }) {
  return (
    <Dialog open={open}>
      <DialogContent>
        <div id='container-popUp'>
          <div id='div-popUpBox'>
            <p>{message}</p>
            <button id='btn-confirmPopUp' onClick={confirmFnct}>{confirm}</button>
            <button id='btn-confirmPopUp' onClick={cancel}>{cancel}</button>
          </div>
        </div>
      </DialogContent>
    </ Dialog>
  );
}