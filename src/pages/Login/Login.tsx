import { BackgroundWrapper } from "../../commons/components/BackgroundWrapper";
import { Header } from "../../commons/components/Header";
import { Button } from "../../commons/components//Button";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { getApiUrl } from "../../commons/utils";
import { motion } from "motion/react";

import { useEffect, useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [badgeScanInput, setBadgeScanInput] = useState("");
  const [isQrCodeOpen, setIsQrCodeOpen] = useState(false);
	const [qrError, setQrError] = useState<boolean>(false);

  useEffect(() => {
    if (badgeScanInput) {
			const fetchData = async () => {
				await new Promise(resolve => setTimeout(resolve, 1000));
				const res = await fetch(getApiUrl(`/api/user/${badgeScanInput}`), {
					method: "GET",
				});
				if (!res.ok) {
					setQrError(true);
					console.log(`User ${badgeScanInput} not found`);
					return;
				}
				navigate(`/map/${badgeScanInput}`);
			};
			fetchData();
			setBadgeScanInput("");
    }
  }, [badgeScanInput]);

	useEffect(() => {
    if (qrError) {
      setTimeout(() => {
        setQrError(false);
      }, 5000);
    }
  }, [qrError]);

  return (
    <BackgroundWrapper>
      <Header />
			{
				isQrCodeOpen && (
					<div>
						<div className={classes.qrCodeWrapper}>
							<BarcodeScannerComponent
								width={300}
								height={300}
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								onUpdate={(err: unknown, result: any) => {
									if (result) setBadgeScanInput(result.text);
									else console.log(err);
								}}
							/>
						</div>
						{
							qrError && (
									<motion.div 
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
										transition={{ duration: 0.5, ease: 'easeInOut' }}
										layout
									>
										<div className={classes.cardWrapper}>
											<div className={classes.introBox}>
												<h2 className={classes.introHeading}>Wrong QR Code</h2>
												<p className={classes.introText}>
													Please ensure that you are scanning the Badge QR Code.
												</p>
											</div>
										</div>
									</motion.div>
							)
						}
						<div className={classes.footer}>
							<Button
								design="white"
								onClick={() => setIsQrCodeOpen(false)}
							>
								Close QR Code Scanner
							</Button>
						</div>
					</div>
				)
			}
			{
				!isQrCodeOpen && (
					<div className={classes.footer}>
						<Button
							design="white"
							onClick={() => setIsQrCodeOpen(true)}
						>
							Scan Badge QR Code
						</Button>
					</div>
				)
			}
      
    </BackgroundWrapper>
  );
};