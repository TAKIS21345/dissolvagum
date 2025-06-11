import LegalPageLayout from "@/components/LegalPageLayout";

export default function BusinessInterestPage() {
  return (
    <LegalPageLayout title="Business Partnership Interest">
      <p className="mb-6">Are you a retailer or business interested in partnering with DissolvaGum if this concept becomes a reality? Please fill out the form below to express your interest. We will reach out if the project moves forward!</p>
      <div className="w-full max-w-2xl mx-auto">
        <iframe aria-label='Business Interest' frameBorder="0" style={{height:'500px',width:'99%',border:'none'}} src='https://forms.zohopublic.com/teamdisso1/form/BusinessInterest/formperma/2mmQzb-YZzPHiR6ANCyB212NKUA9T0umHk-68RHsBxw'></iframe>
      </div>
    </LegalPageLayout>
  );
}
