var GoogleSpreadsheet = require('google-spreadsheet');
var doc = new GoogleSpreadsheet('YOUR_SPREADSHEET_ID'); // needs to be publicly available

doc.getInfo((_, info) => {
  sheet = info.worksheets[0];
  sheet.getRows({
    offset: 1,
    limit: 20,
  }, (_, rows) => {
    rows.forEach((row) => {
      const { id, medium, size, color } = row;
      console.log({ id, medium, size, color });
    })
  });
});
