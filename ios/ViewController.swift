import UIKit
import WebKit

class ViewController: UIViewController {

    var webView: WKWebView!

    override func loadView() {
        webView = WKWebView()
        webView.navigationDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        if #available(iOS 14.0, *) {
            let contactStore = CNContactStore()
            contactStore.requestAccess(for: .contacts) { granted, error in
                if granted {
                    self.loadContacts()
                }
            }
        }
    }

    func loadContacts() {
        // Obtener contactos y enviar a WKWebView
    }

    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        webView.evaluateJavaScript("window.iosContacts = \(self.getContacts())") { (result, error) in
            if let error = error {
                print("Error: \(error.localizedDescription)")
            }
        }
    }

    func getContacts() -> String {
        // Obtener contactos y convertirlos en JSON
        return "[{\"name\": \"Contacto 1\", \"phone\": \"222202350\"}]"
    }
}