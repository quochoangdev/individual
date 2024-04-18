import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from 'react-router-scroll-to-top';
import { PublicRoutes } from './Routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className="App">
          <Routes>
            {PublicRoutes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Page />
                    </DefaultLayout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
