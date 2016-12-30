import React, { Component } from 'react';
import './App.css';
import docData from './data.json';
import lang from './lang.json';
import LocalizedStrings from 'react-localization';

class App extends Component {

  constructor(props) {
    super(props);
    this.docs = {doc: docData.document};
    this.strings = new LocalizedStrings(lang);
    this.strings.setLanguage('ru');
  }

  getDate(docDate) {
      return new Date(docDate).toLocaleDateString();
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading clearfix">{this.strings.titlePanelListDocuments}
          <span className="badge pull-right">{this.docs.doc.length}</span>
        </div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="doc-date">{this.strings.docDate}</th>
              <th>{this.strings.docName}</th>
            </tr>
          </thead>
          <tbody>
            {this.docs.doc.map((d) =>
              <tr key={d.id}>
                <td>{this.getDate(d.docDate)}</td>
                <td><a href={'/document/' + d.id}>{d.displayName}</a></td>                
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;