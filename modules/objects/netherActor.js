export default class NetherActor extends Actor {
  prepareData() {
    
    // In case some spetps need to be overwritten later

    super.prepareData();
  }

  prepareDerivedData() {

    const actorData = this.system;

    // Add possability for switch Statment on the different Actor Types

    this._preparePlayerCharacterData(actorData);
  }

    _preparePlayerCharacterData(actorData) {

        // Calculation of Base Character Values

        this._setCharacterValues(actorData);
    }

    async _setCharacterValues(data) {

        // Calculation of values here

    }

    setNote(note) {

        // Method to update Character Notes

        this.update({ "system.note": note });
    }

    addLogEntry(entry) {

        // Add a Log Entry to the Character Log

        let log = this.system.log;

        log.push(entry);
        this.update({ "system.log": log });
    }

}