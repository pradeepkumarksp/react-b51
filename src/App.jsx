
import React from 'react';
import Pricecart from './Pricecart'

function App(){

  const data = [
    {
      plan: "FREE",
      price: "$0/month",
      user: "Single User",
      highlight:false,
      userEnabler: true,
      storage:'50GB storage',
      storageEnabler: true,
      communityAccess: 'community Access',
      communityAccessEnabler:true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler:true,
      PrivateProjects: 'Unlimited Private Projects',
      PrivateProjectsEnabler: false,
      Phonesupport: 'Dedicated Phone Support',
      PhonesupportEnabler:false,
      Subdomin: 'Free Subdomain',
      SubdominEnalber:false,
      SubdominHighligh:false,
      Status: 'Monthly Status Reports',
      statusEnabler: false
    },
    {
      plan: "PLUS",
      price: "$9/month",
      user: "5 Users",
      highlight:true,
      userEnabler: true,
      storage:'50GB storage',
      storageEnabler: true,
      communityAccess: 'community Access',
      communityAccessEnabler:true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler:true,
      PrivateProjects: 'Unlimited Private Projects',
      PrivateProjectsEnabler: true,
      Phonesupport: 'Dedicated Phone Support',
      PhonesupportEnabler:true,
      Subdomin: 'Free Subdomain',
      SubdominEnalber:true,
      SubdominHighligh:false,
      Status: 'Monthly Status Reports',
      statusEnabler: false
    },
    {
      plan: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      highlight:true,
      userEnabler: true,
      storage:'150GB storage',
      storageEnabler: true,
      communityAccess: 'community Access',
      communityAccessEnabler:true,
      publicProjects: 'Unlimited Public Projects',
      publicProjectsEnabler:true,
      PrivateProjects: 'Unlimited Private Projects',
      PrivateProjectsEnabler: true,
      Phonesupport: 'Dedicated Phone Support',
      PhonesupportEnabler:true,
      Subdomin: 'Free Subdomain',
      SubdominEnalber:true,
      SubdominHighligh:true,
      Status: 'Monthly Status Reports',
      statusEnabler: true
    },
  ];
  return (
    <>
      <section className="pricing py-5">
      <div className='container'>
      <div className='row'>
          {data.map((e, i) => {
            return <Pricecart value ={e} key={i} />;
          })}

      </div>
      </div>
      </section>
    </>
  );
 
}
export default App;