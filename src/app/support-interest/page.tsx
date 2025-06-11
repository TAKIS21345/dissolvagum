import LegalPageLayout from "@/components/LegalPageLayout";

export default function SupportInterestPage() {
  return (
    <LegalPageLayout title="Support & Funding Interest">
      <p className="mb-6">Interested in supporting or funding the DissolvaGum concept? Fill out the form below to let us know your interest in helping bring this eco-friendly idea to life!</p>
      <div className="w-full max-w-2xl mx-auto">
        <iframe aria-label='Support Interest' frameBorder="0" style={{height:'500px',width:'99%',border:'none'}} src='https://forms.zohopublic.com/teamdisso1/form/SupportInterest/formperma/8VXk4nDXb374KAF9erP_ihdgGGdu3p2m3MeLDoaDWJs'></iframe>
      </div>
    </LegalPageLayout>
  );
}
