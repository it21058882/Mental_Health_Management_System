
function Home(){

          return(<div>
                {localStorage.getItem('acctoken')}
              <h1>Mental Health Management System User Side</h1>

              <h1>Home</h1>

                    <a href="/quiz">Quiz Management</a><br/>
                    <a href="/">Doctor Management</a><br/>
                    <a href="/">Game Management</a><br/>
                    <a href="/">Article Management</a><br/> 

          </div>)
}
export default Home;