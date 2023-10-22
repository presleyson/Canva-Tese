import './style.css'
import { Dialog, DialogContent } from '@radix-ui/react-dialog'

export default function PopUp({ open, message, close, confirm, cancel, confirmFnct }) {
  return (
    <Dialog open={open}>
      <DialogContent>
        <div id='container-popUp'>
          <div id='div-popUpBox'>
            <p id='p-pupUp'>{message}</p>
            <div id="div-popUp-btn">
              <button id='btn-confirmPopUp' onClick={close}>{cancel}</button>
              <button id='btn-confirmPopUp' onClick={confirmFnct}>{confirm}</button>
            </div>
          </div>
        </div>
      </DialogContent>
    </ Dialog>
  );
}