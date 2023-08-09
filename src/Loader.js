import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className="loader"> 
        <ThreeDots 
      height="80" 
      width="80" 
      radius="9"
      color="#858585" 
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
      />
</div>
    );
}