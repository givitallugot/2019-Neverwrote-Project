const React = require('react');
const ReactRedux = require('react-redux');

const Note = require('./Note');

const createActionDispatchers = require('../helpers/createActionDispatchers');
const notesActionCreators = require('../reducers/notes');

class NoteList extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { activing: false };
  }
  render() {
    const createNoteComponent = (note) => {
      return (
        <Note
          key={note.id}
          note={note}
        />
      );
    };

    return (
      <div className="neverwrote-note-div">
        <h2>Notes</h2>
        <ul className="neverwrote-note-title">
          {this.props.notebooks.notes.map(createNoteComponent)}
        </ul>
      </div>
    );
 }
}

// A version of the NoteList component which is connected to the Redux store.
const NoteListContainer = ReactRedux.connect(
  (state) => ({
    notes: state.notes,
    activeNoteId: state.activeNoteId,
  }),
  createActionDispatchers(notesActionCreators)
)(NoteList);

module.exports = NoteListContainer;
