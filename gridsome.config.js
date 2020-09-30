// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-source-google-sheets',
      options: {
        sheetId: '1nyU64h7XiIloxDUC8v42QL2jSNdhLi0BJ3DT1fAavFs', 
        apiKey: 'AIzaSyAknVfdGPlF190SH7hXgZhutLSSPv3QfDI',
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      }
    }
  ]
}
